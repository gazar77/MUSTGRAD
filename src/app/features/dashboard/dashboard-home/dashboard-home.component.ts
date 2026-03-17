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

  slides: SlideItem[];

  constructor() {
    this.slides = [
      {
        image: 'assets/must_discussion_1.png',
        title: 'بوابة مشاريع التخرج',
        description: 'المنصة المتكاملة لإدارة ومتابعة مشاريع التخرج بكلية الحاسبات والمعلومات - جامعة مصر للعلوم والتكنولوجيا'
      },
      {
        image: 'assets/must_discussion_2.png',
        title: 'أفكار مشاريع مبتكرة',
        description: 'استكشف أحدث الأفكار والتقنيات المقترحة لمشاريع التخرج لهذا العام'
      },
      {
        image: 'assets/must_discussion_3.png',
        title: 'مستقبلك يبدأ من هنا',
        description: 'سجل مشروعك وتابع خطوات النجاح مع نخبة من أفضل الأساتذة والخبراء'
      }
    ];
  }

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
