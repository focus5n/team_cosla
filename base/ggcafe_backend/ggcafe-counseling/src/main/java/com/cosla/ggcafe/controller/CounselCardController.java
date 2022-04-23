package com.cosla.ggcafe.controller;

import java.util.List;

import com.cosla.ggcafe.model.CounselCard;
import com.cosla.ggcafe.repository.CounselCardRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CounselCardController {

    @Autowired
    CounselCardRepository counselCardRepository;

    // Counsel Card Created
    @PostMapping("/writecounselcard")
    @ResponseBody
    public String writeCounselCard(@ModelAttribute CounselCard counselCard) {
        System.out.println("출력" + counselCard);
        counselCardRepository.save(counselCard);
        return "writecounselcard";
    }

    // Counsel Card Read
    @GetMapping("/aftercounsel/{counseleeId}")
    @ResponseBody
    public List<CounselCard> afterCounsel(@PathVariable("counseleeId") int counseleeId) {
        List<CounselCard> list = counselCardRepository.findByCounseleeId(counseleeId);
        return list;
    }

    // Counsel Card Update
    @PostMapping("/updatecounselcard/{id}")
    @ResponseBody
    public String updateCounselCard(@ModelAttribute CounselCard counselCard, @PathVariable("id") long id) {
        counselCard.setId(id);
        counselCardRepository.save(counselCard);
        return "updatecounselcard";
    }

    // Counsel Card Delete
    @GetMapping("/deletecounselcard/{id}")
    @ResponseBody
    public String deleteCounselCard(@PathVariable("id") long id) {
        counselCardRepository.deleteById(id);
        return "deletecounselcard";
    }

}