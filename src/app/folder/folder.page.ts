import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private menu: MenuController, private router: Router) {}

  ngOnInit() {
    this.menu.enable(true);
    if (
      localStorage.getItem('studentID') == null &&
      localStorage.getItem('adminID') == null
    ) {
      this.router.navigate(['/login']);
    }
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
