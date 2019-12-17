import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  getUserEndpoint=()=>{
    return this.http.get("http://localhost:5003/api/account/users/me",this.getRequestHeaders())
  }
  protected getRequestHeaders(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + `CfDJ8HaFW9ncEX1OgRI44v1UFOvL60HszuBmDAEN74fylOfhnzLtsxsHHjH9F2u4b1eVXNNpxcwgW05nzG08Bi09jxl9P6qnJ4Etfj1ijsVM_KHDe5ctVEVxTqQ95FaJQzVQvV1el1Eyz-zqnJiSFh42Zhlcubt5cM5lWXdS3KA5EelVEJ56vLtimgdxKgJQTwkddlfZiwa_znF8bG0LutKus6KWGvqJfA9uP0RrH4MVklZu6Z7ex3GUHBk_mp1hqD-kKqO7m-f4ml-i6pi3JOZluIiOrjF0GcGaKRBW1TZrFh9AkKvUsy3GkJcWXv3JD-s6MdsKz5yQkqpsOMb4M_-LZUmUOJ9Lt22fvRw8bMmyxlxr4fYwJbUGK3ex_kL7NYpZB3IdP4KIaQ_XXQ_hxThENfTDfRHZCXnhPn5I1gbd8znsHMVH0NZcGbonYnOMyYEg1OIgm3NiY8fLdjWivEswx8hp1Xn0AoHGXUFYMvBfd7BLroiaOhQXNHNrrFMbsiRNnmnIlvDgZj-7KRBNUdioRNeisGnqdG44NfADpeuTmhmzrUvklkIIKIdvEA_XeX9m2TFf08YCk98bsiLLdYt0ncG_hWuee5wa6TWZ1GPfRinI-8XD0KQTjuupvuXwgRpAHwqll-Y94WHWa0uwSayP0B1Z1kYhcpZsB16itiU6rB1KYqBAgWeC2p8lDNEtaeSZv8ZP1-ljJXkntEfzJLfec46_ig-bQqKgaicj-8VK5cbH3B7R6dKFTkdEpTiHjw5cTE_uoQNWUvyZiwZvTSi-chyYLsf3Cg62f7EOFy-_sTdfy7RkLBr9W60NM7YddFj3z_iOZDSlRtTQ5-kTRTE7U-GC2rUJikjgjVzq8fpQFNjcsKA_373g9FhYGSv4rNmFEzOPPd_Cy_3u0SzNzeMZx4DDqNIo-dghKHWh2NnTDotlsluI-AeGxUf7VgdEv6kl3kcdCQzb95qBjOFUOmbUnZ1XK2t6KQBUK-tAVIKkDYdsv3FZpGI8R2B1J6paROG4hmr38cE9S54f2G4wGAVfgAI`,
      'Content-Type': 'application/json',
      'Accept': `application/vnd.iman.v1 json, application/json, text/plain, */*`,
      'App-Version': '2.6.0'
    });

    return { headers: headers };
  }
}

