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
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


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

    @GetMapping("/aftercounsel/{name}")
    @ResponseBody
    public AfterCounselMapping afterCounsel(@PathVariable("name") String counselee) {
        AfterCounselMapping afterCounselMapping = counselCardRepository.findByCounselee(counselee);
        return afterCounselMapping;
    }

    @GetMapping("/aftercounselex")
    @ResponseBody
    public List<CounselCard> afterCounselEx() {
        List<CounselCard> list = counselCardRepository.findAll();
        return list;
    }

    @PostMapping("/aftercounselex/write")
    public String writeCounselCard(@ModelAttribute CounselCard counselCard) {
        counselCardRepository.save(counselCard);
        return "aftercounselex/write";
    }
    

}
