import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public lyrics: string[] = [
    'I dont like you T-Series',
    'Nothing personal, kid',
    'But I must go all out',
    'Just this once',
    'Bobs or vegana, whichever will it be?',
    'Sit the fuck down T-Series',
    'Im here to spill the real tea',
    'You tryna dethrone me from spot on number one',
    'But you India, you lose',
    'So best think you havent won',
    'When Im through with you',
    'We are gonna be completely fucking done',
    'Cause we only just begun',
    'I review you',
    'Zero',
    'Bye bitch, gone',
    'So come on, T-Series',
    'Looking hungry for some drama',
    'Here, let me serve your bitch lasagna',
    'Bitch, lasagna',
    'T-Series aint nothing but a bitch, lasagna',
    'Bitch, lasagna',
    'Look at T-Series they just crying for their momma',
    'Bitch, lasagna',
    'T-Series aint nothing but a bitch, lasagna',
    'Bitch, lasagna',
    'T-Series just wet themselves in their pajama',
    'So who the hell is Bob, and why you wanna kiss him? (ew)',
    'Im a blue eyes white dragon, while youre just dark magician (oof)',
    'You got a fifth of the population in your nation but',
    'I got nine-year-olds of worlds so hold your defecation (oops)',
    'Motu Patlu, what the fuck is that even supposed to mean?',
    'Your language sounds like it came from a mumble rap community',
    'No papa, no papa, yes papa, Johnny',
    'Now down all of this sugar and',
    'Lets throw this fucking party with some',
    'Bitch, lasagna',
    'Look at T-Series they just crying for their momma',
    'Bitch, lasagna',
    'T-Series aint nothing but a bitch lasagna',
    'Bitch, lasagna',
    'Look at T-Series they just wetting their pajama',
    'Bitch, lasagna',
    'T-Series aint nothing but a bitch lasagna',
    'You got a population of 1.32 billion',
    'But most your videos cant seem to hit even a million',
    'Sub-bot!'
  ];
  public line: number = 0;

  public Sing() {
    alert(this.lyrics[this.line]);
    this.line++;

    if (this.line === this.lyrics.length) {
      this.line = 0;
    }
  }
}
