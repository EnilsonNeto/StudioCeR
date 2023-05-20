import { HttpClient } from '@angular/common/http';
import { Component, LOCALE_ID } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
})
export class SchedulingComponent {
  today: Date = new Date();
  dataAtual: Date = new Date();
  diasCalendario: Date[] = [];
  diaSelecionado: Date | null = null;
  nameFromTable: any;
  formUser!: FormGroup;
  formData: any;
  combinedFormGroup: any;
  autorization = { 'Authorization': 'Bearer key5fJDD8QhJcYtU1' };
  selectedOption: any;
  teste2: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.construirCalendario();
    this.formUser = new FormGroup({
      data: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      professional: new FormControl('', [Validators.required]),
      process: new FormControl('', [Validators.required]),
    });
    this.formUser.controls['process'].valueChanges.subscribe((value) => {
      if (value === 'Sobrancelha') {
        this.formUser.controls['professional'].setValue('Camille');
      } else {
        this.formUser.controls['professional'].setValue('Renee');
      }
    });
  }

  selecionarDia(dia: Date) {
    const mesAtual = this.dataAtual.getMonth();
    const anoAtual = this.dataAtual.getFullYear();
    const mesSelecionado = dia.getMonth();
    const anoSelecionado = dia.getFullYear();

    if (anoSelecionado > anoAtual || (anoSelecionado === anoAtual && mesSelecionado >= mesAtual)) {
      this.diaSelecionado = dia;
    }
  }

  createDataUser(data: any) {
    this.formData = this.combinedFormGroup = Object.assign({}, this.formUser.value);

    if (this.formData.invalid) {
      alert('Error: Invalid form data');
      return;
    }

    console.log(this.nameFromTable);

    const newUser = {
      fields: {
        data: data,
        name: this.formUser.value.name,
        surname: this.formUser.value.surname,
        number: this.formUser.value.number,
        procedimento: this.formUser.value.process,
      },
    };

    if (this.formUser.value.professional === 'Camille') {
      const headers = this.autorization;
      this.http.post('https://api.airtable.com/v0/app5qbSshO2ZFVei1/Camille', newUser, { headers })
        .subscribe(response => {
          console.log(response);
        }, error => {
          console.error(error);
        });
    } else if (this.formUser.value.professional === 'Renee') {
      const headers = this.autorization;
      this.http.post('https://api.airtable.com/v0/app5qbSshO2ZFVei1/Renee', newUser, { headers })
        .subscribe(response => {
          console.log(response);
        }, error => {
          console.error(error);
        });
    }
  }

  isInputEmpty(): boolean {
    return this.formUser.get('name')?.value
      && this.formUser.get('surname')?.value
      && this.formUser.get(['number'])?.value
      && this.formUser.get('process')?.value === '';
  }

  send(data: any, testando: any) {
    this.nameFromTable = testando;
    this.combinedFormGroup = Object.assign({}, this.formUser.value);
    if (this.combinedFormGroup.invalid) {
      alert("Error: Invalid form data");
      return;
    } else {
      this.createDataUser(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agendamento realizado com sucesso, em breve entraremos em contato!',
        showConfirmButton: true,
        timer: 5000
      })
    }
  }

  construirCalendario() {
    const ano = this.dataAtual.getFullYear();
    const mes = this.dataAtual.getMonth();

    const primeiroDiaDaSemana = 0;
    const ultimoDiaDaSemana = 6;

    const dataInicial = new Date(ano, mes, 1);
    while (dataInicial.getDay() !== primeiroDiaDaSemana) {
      dataInicial.setDate(dataInicial.getDate() - 1);
    }

    const dataFinal = new Date(ano, mes + 1, 0);
    while (dataFinal.getDay() !== ultimoDiaDaSemana) {
      dataFinal.setDate(dataFinal.getDate() + 1);
    }

    this.diasCalendario = [];
    for (
      let data = new Date(dataInicial.getTime());
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ) {
      this.diasCalendario.push(new Date(data.getTime()));
    }
  }

  alterarMes(offsetMes: number) {
    this.dataAtual.setMonth(this.dataAtual.getMonth() + offsetMes);
    this.dataAtual = new Date(this.dataAtual.getTime());
    this.construirCalendario();
  }
}
