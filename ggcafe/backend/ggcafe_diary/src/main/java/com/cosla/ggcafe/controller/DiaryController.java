package com.cosla.ggcafe.controller;

import java.util.List;

import com.cosla.ggcafe.model.DiaryBoard;
import com.cosla.ggcafe.repository.DiaryBoardRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:8080")

@RestController
public class DiaryController {

    @Autowired
    DiaryBoardRepository diaryBoardRepository;

    /*
     * @PostMapping("/diaryboards")
     * public DiaryBoard createDiarybBoard(@RequestBody DiaryBoard diaryBoard){
     * return diaryBoardService.createDiaryBoard(diaryBoard);
     * }
     */

    @GetMapping("/")
    public String home() {
        return "hello world";
    }

    @GetMapping("/findall")
    public List<DiaryBoard> findAll() {

        System.out.println(
                "findall()");
        List<DiaryBoard> list = diaryBoardRepository.findAll();

        System.out.println(
                "findall(): " + list.get(0).getTitle() + ", ");
        return list;
    }

    @PostMapping("/write")
    public String diaryboardWrite(@ModelAttribute DiaryBoard diaryBoard) {

        diaryBoardRepository.save(diaryBoard);

        return "diaryboard/write";
    }

    @PostMapping("/Diaryboard/update/{id}")
    public String boardUpdate(@ModelAttribute DiaryBoard diaryboard, @PathVariable("id") long id) {
        diaryboard.setId(id);
        diaryBoardRepository.save(diaryboard);
        return "redirect:/board/" + id;
    }
}
