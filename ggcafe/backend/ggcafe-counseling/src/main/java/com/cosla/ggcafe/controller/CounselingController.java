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
public class CounselingController {

    @Autowired
    CounselingRepository counselingRepository;

    @GetMapping("/counseling/{counseleeId}")
    @ResponseBody
    public List<Counseling> counselingList(@PathVariable("counseleeId") int counseleeId) {
        List<Counseling> list = counselingRepository.findByCounseleeId(counseleeId);
        return list;
    }
}
