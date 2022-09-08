/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Reto3.Reto3.controller;

import com.Reto3.Reto3.entity.Client;
import com.Reto3.Reto3.service.ClientService;
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
@RequestMapping("/api/Client")
public class ClientController {

    @Autowired
    private ClientService service;

    @GetMapping("/all")
    public List<Client> findAllClients() {
        return service.getClients();
    }

    @GetMapping("/{id}")
    public Client findClientId(@PathVariable int id) {
        return service.getClientById(id);
    }

    @PostMapping("/save")
    public ResponseEntity addClient(@RequestBody Client client) {
        service.saveClient(client);
        return ResponseEntity.status(201).build();
    }

}
