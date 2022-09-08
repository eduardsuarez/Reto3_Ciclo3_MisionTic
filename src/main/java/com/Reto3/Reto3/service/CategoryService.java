/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Reto3.Reto3.service;

import com.Reto3.Reto3.entity.Category;
import com.Reto3.Reto3.repository.CategoryRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author eduar
 */
@Service
public class CategoryService {

    @Autowired
    private CategoryRepository repository;

    public List<Category> getCategories() {
        return repository.findAll();
    }

    public Category getCategoryById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Category saveCategory(Category category) {
        return repository.save(category);
    }

}
