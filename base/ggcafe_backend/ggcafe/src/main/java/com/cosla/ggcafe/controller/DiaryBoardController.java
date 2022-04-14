package com.cosla.ggcafe.controller;
import javax.servlet.http.HttpSession;

import com.cosla.ggcafe.model.DiaryBoard;
import com.cosla.ggcafe.repository.DiaryBoardRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class DiaryBoardController {
    @Autowired
    DiaryBoardRepository diaryBoardRepository;

    @Autowired
    HttpSession session;

    @GetMapping("/diaryboard/write")
    public String diaryboardWrite() {
        return "diaryboard/write";
    }

    @PostMapping("/diaryboard/write")
    public String diaryboardWrite(@ModelAttribute DiaryBoard diaryBoard) {
        diaryBoardRepository.save(diaryBoard);

        return "diaryboard/write";
    }
}
