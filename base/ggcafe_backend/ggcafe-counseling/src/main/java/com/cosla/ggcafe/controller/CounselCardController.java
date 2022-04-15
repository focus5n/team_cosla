package com.cosla.ggcafe.controller;

import java.util.List;

import com.cosla.ggcafe.model.CounselCard;
import com.cosla.ggcafe.repository.CounselCardRepository;
import com.cosla.ggcafe.repository.mapping.AfterCounselMapping;
import com.cosla.ggcafe.model.Counseling;

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

    @GetMapping("/aftercounsel/{counseleeId}")
    @ResponseBody
    public List<CounselCard> afterCounsel(@PathVariable("counseleeId") int counseleeId) {
        List<CounselCard> list = counselCardRepository.findByCounseleeId(counseleeId);
        return list;
    }
    
    @PostMapping("/aftercounselex/write")
    public String writeCounselCard(@ModelAttribute CounselCard counselCard) {
        counselCardRepository.save(counselCard);
        return "aftercounselex/write";
    }

}