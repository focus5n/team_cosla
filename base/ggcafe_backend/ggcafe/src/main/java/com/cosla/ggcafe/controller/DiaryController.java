package com.cosla.ggcafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.cosla.ggcafe.model.DiaryBoard;
import com.cosla.ggcafe.repository.DiaryBoardRepository;

..
@Controller
public class DiaryController {
    
    @Autowired
    DiaryBoardRepository diaryBoardRepository;

    @GetMapping({ "/", "/diary" })
    public String index() {
        return "index";
    }

    @GetMapping("/diary/list")
    public String diaryList(Model model) {
        List<DiaryBoard> list = diaryBoardRepository.findAll();
        model.addAttribute("list", list);
        return "diary/list";
    }
}
