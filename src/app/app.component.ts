import { PreguntadoService } from './preguntado.service';
import { Dibujo } from './dibujo';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'app';
	dibujo: Observable<Dibujo>;

	constructor(private preguntadoService: PreguntadoService) {
		this.dibujo = preguntadoService.getPreguntados();
	}

	preguntar() {
		this.dibujo = this.preguntadoService.getPreguntados();
	}
}
