import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechniqueService } from '../../services/technique.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-technique-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, SafePipe],
  templateUrl: './technique-detail.component.html',
  styleUrls: ['./technique-detail.component.scss']
})
export class TechniqueDetailComponent implements OnInit {
  technique: any | undefined;
  variants: any[] = [];
  related: any[] = [];
  imageZoom: string | null = null;

  constructor(private route: ActivatedRoute, private svc: TechniqueService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(pm => {
      const name = pm.get('name') || '';
      this.technique = this.svc.getByName(name);
      if (this.technique) {
        this.variants = this.svc.getVariants(this.technique.name);
        this.related = this.svc.getRelatedByVariant(this.technique.name);
      }
    });
  }

  openImageZoom(imageUrl: string) {
    this.imageZoom = imageUrl;
  }

  closeImageZoom() {
    this.imageZoom = null;
  }

  getYoutubeEmbedUrl(videoUrl: string): string | null {
    if (!videoUrl) return null;
    
    // Extract video ID from various YouTube URL formats
    let videoId = null;
    
    // Standard watch URL: https://www.youtube.com/watch?v=VIDEO_ID
    const watchMatch = videoUrl.match(/[?&]v=([^&]+)/);
    if (watchMatch) {
      videoId = watchMatch[1];
    }
    
    // Short URL: https://youtu.be/VIDEO_ID
    const shortMatch = videoUrl.match(/youtu\.be\/([^?]+)/);
    if (shortMatch) {
      videoId = shortMatch[1];
    }
    
    // Embed URL: https://www.youtube.com/embed/VIDEO_ID
    const embedMatch = videoUrl.match(/\/embed\/([^?]+)/);
    if (embedMatch) {
      videoId = embedMatch[1];
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  }
}
