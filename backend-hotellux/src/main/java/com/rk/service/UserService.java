package com.rk.service;

import java.util.List;

import com.rk.entity.User;

public interface UserService {

	public Object registerUser(User user) ;


	public Object getUserById(Long id) ;


	User findByUsername(String username);


	public List<User> getAllUsers();


	public void deleteUser(Long id);


	public User updateUser(Long id, User updatedUser);
		
}
