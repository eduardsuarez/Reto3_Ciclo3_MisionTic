/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Reto3.Reto3.service;

import com.Reto3.Reto3.entity.Client;
import com.Reto3.Reto3.repository.ClientRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author eduar
 */
@Service
public class ClientService {

    @Autowired
    private ClientRepository repository;

    public List<Client> getClients() {
        return repository.findAll();
    }

    public Client getClientById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Client saveClient(Client client) {
        return repository.save(client);
    }

}
