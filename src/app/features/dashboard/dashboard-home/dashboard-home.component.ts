import { Component, OnInit, OnDestroy } from '@angular/core';

interface SlideItem {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;

  slides: SlideItem[] = [
    {
      image: 'assets/slider-1.png',
      title: 'مناقشات مشاريع التخرج',
      description: 'نماذج من مناقشات مشاريع التخرج السابقة بكلية الحاسبات والمعلومات'
    },
    {
      image: 'assets/slider-2-new.png',
      title: 'عروض المشاريع',
      description: 'طلابنا يقدمون مشاريعهم أمام لجان التحكيم والإشراف'
    },
    {
      image: 'assets/slider-3-new.png',
      title: 'تخريج دفعة جديدة',
      description: 'احتفال بنجاح طلابنا في مشاريع التخرج'
    }
  ];

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
