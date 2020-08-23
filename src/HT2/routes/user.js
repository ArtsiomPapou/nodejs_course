import express from 'express';
import collection from '../classes/UserCollection';
import User from '../classes/User';
import {userSchemes} from '../schemes/User';
import {validateSchema} from '../middleware/validation';

const router = express.Router();

/**
 * @example /user/autosuggest/?substring=<String>&limit=<Number>
 */
router.get('/autosuggest/', (req, res) => {
  const {substring, limit} = req.query;
  if (substring && limit) {
    const fondUsers = collection.getAutoSuggestUsers(substring, parseInt(limit), 10);

    res.json(fondUsers);
    console.log('Users by autosuggest');
  } else {
    res.status(500).send(`Params are broken`);
  }
});

router.get('/:id', (req, res) => {
  const user = collection.getItem(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(500).send(`User with ${req.params.id} doesn't exist`);
  }
});

router.post('/', validateSchema(userSchemes.addUser), (req, res) => {
  const {login, password, age, isDeleted} = req.body;
  const user = new User({
    login,
    password,
    age,
    isDeleted
  });
  collection.createItem(user);

  res.json({
    status: 'success',
    message: 'User created successfully',
    data: {id: user.id}
  });
});

router.put('/:id', validateSchema(userSchemes.updateUser), (req, res) => {
  const {id} = req.params;
  const data = req.body;
  data.id = id;

  if(collection.isItemExist(data.id)) {
    const success = collection.updateItem(data);

  if (success) res.json({msg: 'User updated'});
  } else {
    res.status(400).json({msg: `User with ${data.id} doesn't exist`});
  }
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  
  if(collection.isItemExist(id)) {
    const success = collection.deleteItem(id);
    if (success) res.json({msg: `User ${id} deleted`});
    else res.send(`User with ${id} doesn't exist`);
  } else {
    res.status(500).send(`User with ${id} doesn't exist`);
  }
});

export default router;