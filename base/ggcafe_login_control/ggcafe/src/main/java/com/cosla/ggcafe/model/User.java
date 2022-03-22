package com.cosla.ggcafe.model;

import lombok.Data;

@Data
public class User {
    private Long id;
    private String name;
    private String email;
    private String gender;
    private String age_range;
    private String birth;
    
}
