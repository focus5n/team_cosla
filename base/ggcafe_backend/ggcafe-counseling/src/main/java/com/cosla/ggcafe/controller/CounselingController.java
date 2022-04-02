package com.cosla.ggcafe.controller;

import java.util.List;

import com.cosla.ggcafe.model.CounselCard;
import com.cosla.ggcafe.model.Counseling;
import com.cosla.ggcafe.repository.CounselCardRepository;
import com.cosla.ggcafe.repository.CounselingRepository;
import com.cosla.ggcafe.repository.mapping.AfterCounselMapping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@ResponseBody
@CrossOrigin
public class CounselingController {
    
    @Autowired
    CounselingRepository counselingRepository;

    @Autowired
    CounselCardRepository counselCardRepository;

    @GetMapping("/counseling")
    @ResponseBody
    public List<Counseling> counselingList() {
        List<Counseling> list = counselingRepository.findAll();
        return list;
    }

    @GetMapping("/aftercounsel")
    @ResponseBody
    public AfterCounselMapping afterCounsel(@PathVariable("nonex") String counselee, CounselCard counselcard) {
       AfterCounselMapping afterCounselMapping = counselCardRepository.findByCounselee(counselee);
       return afterCounselMapping;
    }

    @GetMapping("/aftercounselEx")
    @ResponseBody
    public List<CounselCard> afterCounselEx() {
        List<CounselCard> list = counselCardRepository.findAll();
        return list;
    }

}
