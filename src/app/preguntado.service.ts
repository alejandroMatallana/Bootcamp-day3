import { Dibujo } from './dibujo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PreguntadoService {
	urlPregunta = 'https://yesno.wtf/api';

	constructor(private httpClient: HttpClient) {}

	getPreguntados() {
		return this.httpClient.get<Dibujo>(this.urlPregunta);
	}
}
