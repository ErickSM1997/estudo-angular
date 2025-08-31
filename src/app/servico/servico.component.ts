import { Component, OnInit } from '@angular/core';

export interface tabelaServico {
  nome: string;
  descricao: string;
  duracao: string;
  preco: string;
  comissao: string;
}

const SERVICO_DATA: tabelaServico[] = [
  { descricao: 'Corte simples na tesoura e máquina', nome: 'Corte', duracao: '30 minutos', preco: 'R$45,00', comissao: '5%' },

  { descricao: 'Aparar e desenhar a barba com toalha quente', nome: 'Barba', duracao: '25 minutos', preco: 'R$35,00', comissao: '5%' },

  { descricao: 'Corte degradê com finalização na navalha e acabamento com produto', nome: 'Corte Degradê', duracao: '40 minutos', preco: 'R$55,00', comissao: '7%' },

  { descricao: 'Ritual completo de relaxamento com toalha quente, massagem facial e barbear clássico', nome: 'Barbear Tradicional', duracao: '45 minutos', preco: 'R$65,00', comissao: '8%' },

  { descricao: 'Corte de cabelo + barba com hidratação e finalização especial', nome: 'Combo Corte + Barba', duracao: '60 minutos', preco: 'R$90,00', comissao: '10%' },

  { descricao: 'Tratamento de hidratação e revitalização dos fios, indicado para cabelos ressecados', nome: 'Hidratação Capilar', duracao: '35 minutos', preco: 'R$50,00', comissao: '6%' },

];
@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss']
})
export class ServicoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['nome', 'descricao', 'duracao', 'preco', 'comissao'];
  dataSource = SERVICO_DATA;
}

