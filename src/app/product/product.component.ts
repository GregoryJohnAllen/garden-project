import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  plants: any

  constructor(private plantFetch:ApiService) { }

  ngOnInit(): void {
    this.getPlants()
  }

  getPlants() {
    this.plantFetch.getPlants().subscribe((data) => {
      this.plants = data
    })
    }
  }

