package com.cosla.ggcafe.repository;

import com.cosla.ggcafe.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

}
