/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Reto3.Reto3.service;

import com.Reto3.Reto3.entity.Score;
import com.Reto3.Reto3.repository.ScoreRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author eduar
 */
@Service
public class ScoreService {

    @Autowired
    private ScoreRepository repository;

    public List<Score> getScores() {
        return repository.findAll();
    }

    public Score getScoreById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Score saveScore(Score score) {
        return repository.save(score);
    }

}
