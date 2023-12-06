import { Injectable } from '@angular/core';
import { School } from './school.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

    private schools: School[] = [
        {
          nome: 'Escola Alpha',
          endereco: 'Rua Principal, 123',
          codigoInep: '98765432',
          seriesAtendidas: ['1º Ano', '2º Ano', '3º Ano'],
          tipo: 'particular',
        },
        {
          nome: 'Escola Beta',
          endereco: 'Avenida Secundária, 456',
          codigoInep: '87654321',
          seriesAtendidas: ['4º Ano', '5º Ano', '6º Ano'],
          tipo: 'publica',
        },
        {
          nome: 'Escola Gama',
          endereco: 'Travessa dos Estudantes, 789',
          codigoInep: '76543210',
          seriesAtendidas: ['7º Ano', '8º Ano', '9º Ano'],
          tipo: 'particular',
        },
        {
          nome: 'Escola Delta',
          endereco: 'Praça da Educação, 101',
          codigoInep: '65432109',
          seriesAtendidas: ['Ensino Médio'],
          tipo: 'publica',
        },
        {
          nome: 'Escola Ômega',
          endereco: 'Alameda da Sabedoria, 202',
          codigoInep: '54321098',
          seriesAtendidas: ['1º Ano', '2º Ano'],
          tipo: 'particular',
        },
        {
          nome: 'Escola Zeta',
          endereco: 'Estrada do Conhecimento, 303',
          codigoInep: '43210987',
          seriesAtendidas: ['3º Ano', '4º Ano'],
          tipo: 'publica',
        },
        {
          nome: 'Escola Sigma',
          endereco: 'Acesso ao Saber, 404',
          codigoInep: '32109876',
          seriesAtendidas: ['5º Ano', '6º Ano'],
          tipo: 'particular',
        },
        {
          nome: 'Escola Kappa',
          endereco: 'Caminho do Aprendizado, 505',
          codigoInep: '21098765',
          seriesAtendidas: ['7º Ano', '8º Ano'],
          tipo: 'publica',
        },
        {
          nome: 'Escola Lambda',
          endereco: 'Passagem da Educação, 606',
          codigoInep: '10987654',
          seriesAtendidas: ['9º Ano'],
          tipo: 'particular',
        },
        {
          nome: 'Escola Epsilon',
          endereco: 'Via do Saber, 707',
          codigoInep: '09876543',
          seriesAtendidas: ['Ensino Médio'],
          tipo: 'publica',
        },
      ];

    private items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    getItems(): School[] {
        return this.schools;
    }

    searchItems(query: string): School[] {
        // Filtrar a lista com base na pesquisa
        return this.schools.filter(item => item.nome.toLowerCase().includes(query.toLowerCase()));
    }

    searchItemsByINEPCode(query: string): School | null {
        // Filtrar a lista com base na pesquisa
        const schoolDetails: School | undefined = this.schools.find(school => school.codigoInep === query);
    
        return schoolDetails || null;
    }
}
