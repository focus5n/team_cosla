package com.cosla.ggcafe.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "user")
@Data
public class User {

    @Id
    private String id;

    private String name;
    private String email;
    private String gender;
    private String age_range;
    private String birth;
    private String password;

}
