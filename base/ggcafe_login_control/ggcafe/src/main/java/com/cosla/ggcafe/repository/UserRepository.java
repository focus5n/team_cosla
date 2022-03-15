package com.cosla.ggcafe.repository;

import com.cosla.ggcafe.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String>{
    User findByName(String Name);
}
