import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  async generateSummary(data: any): Promise<string> {

  // 🔥 Mock AI response (no API needed)
  return Promise.resolve(
    `Experienced Angular Developer with strong skills in ${data.skills}. 
    Proven ability to build scalable web applications and lead development teams.`
  );
}

}