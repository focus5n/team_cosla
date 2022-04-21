package com.cosla.ggcafe.controller;

import java.util.List;

import com.cosla.ggcafe.model.Counseling;
import com.cosla.ggcafe.repository.CounselingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

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
