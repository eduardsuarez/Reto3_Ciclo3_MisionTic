/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Reto3.Reto3.controller;

import com.Reto3.Reto3.entity.Admin;
import com.Reto3.Reto3.service.AdminService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author eduar
 */
@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/api/Admin")
public class AdminController {

    @Autowired
    private AdminService service;

    @GetMapping("/all")
    public List<Admin> findAllAdmins() {
        return service.getAdmins();
    }

    @GetMapping("/{id}")
    public Admin findAdminId(@PathVariable int id) {
        return service.getAdminById(id);
    }

    @PostMapping("/save")
    public ResponseEntity addAdmin(@RequestBody Admin admin) {
        service.saveAdmin(admin);
        return ResponseEntity.status(201).build();
    }

}
