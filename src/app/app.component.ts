import { Component } from '@angular/core';
declare var require: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  private logo = require('../assets/images/glanz_logo.png');
  private testgif = require('../assets/images/animations/ourwedding_wh.gif');
  //private img = require('../assets/images/wedding/andy_jeska/10099882125_4afe7c6786_k_mb.jpg');
  private imgLightBox1 = require('../assets/images/wedding/andy_jeska/600x600/10094863536_8f293da2ad_k.jpg');
  private imgLightBox2 = require('../assets/images/wedding/andy_jeska/10096243776_4e750f391d_k.jpg');
  private imgLightBox3 = require('../assets/images/wedding/andy_jeska/10095927256_f459f77daa_k.jpg');
  private imgLightBox4 = require('../assets/images/wedding/andy_jeska/10095963916_57e18bea41_k.jpg');
  private imgLightBox5 = require('../assets/images/wedding/andy_jeska/10095988173_77091281cd_k.jpg');
  private imgLightBox6 = require('../assets/images/wedding/andy_jeska/10096139416_1162425d85_k.jpg');
  private imgLightBox7 = require('../assets/images/wedding/andy_jeska/600x600/10094956883_a882196f8c_k.jpg');
  private imgLightBox8 = require('../assets/images/wedding/andy_jeska/10094863536_8f293da2ad_k.jpg');
  private imgLightBox9 = require('../assets/images/wedding/andy_jeska/10100100896_8b80e531d1_k.jpg');
  private imgLightBox10 = require('../assets/images/wedding/andy_jeska/10100173003_80e26502d3_k.jpg');
  private imgLightBox11 = require('../assets/images/wedding/andy_jeska/10100392493_07fcf7d82b_k.jpg');
  private imgLightBox12 = require('../assets/images/wedding/andy_jeska/10099954204_db5f419e44_k.jpg');
  private imgLightBox13 = require('../assets/images/wedding/andy_jeska/10099728415_f6d8ea36c0_k.jpg');
  private imgLightBox14 = require('../assets/images/wedding/andy_jeska/10099718805_16c092eb64_k.jpg');
  private imgLightBox15 = require('../assets/images/wedding/andy_jeska/10100565866_2fd1627ee6_k.jpg');
  private imgLightBox16 = require('../assets/images/wedding/andy_jeska/10099579135_677c46440b_k.jpg');
  private imgLightBox17 = require('../assets/images/wedding/andy_jeska/10099389876_019dea4bdd_k.jpg');
  private gif = require('../assets/images/wedding/andy_jeska/10099882125_4afe7c6786_k_mb.jpg');
  private savethedateGif = require('../assets/images/animations/savethedate_wh.gif');

  private logoMacys = require('../assets/images/partners/macys-logo.png');
  private amazon = require('../assets/images/partners/amazon.png');
  private bedbathBeyond = require('../assets/images/partners/bed-bath-beyond-logo.png');
  private newly = require('../assets/images/partners/newly.png');

  private photo = require('../assets/images/wedding/andy_jeska/10099882125_4afe7c6786_k_mb.jpg');
  private imgData: string = `url(${this.photo})`;
  private photo2 = require('../assets/images/wedding/andy_jeska/10096243776_4e750f391d_k.jpg');
  private imgData2: string = `url(${this.photo2})`;
  private photo3 = require('../assets/images/wedding/andy_jeska/600x600/10095142066_6a86ebfe67_k.jpg');
  private imgData3: string = `url(${this.photo3})`;
  private photo4 = require('../assets/images/wedding/andy_jeska/600x600/10100100896_8b80e531d1_k.jpg');
  private imgData4: string = `url(${this.photo4})`;
  private photo5 = require('../assets/images/wedding/600x600/q9nabuuiuvq-scott-webb.jpg');
  private imgData5: string = `url(${this.photo5})`;
  private photo6 = require('../assets/images/wedding/andy_jeska/10099954204_db5f419e44_k.jpg');
  private imgData6: string = `url(${this.photo6})`;
  private photo7 = require('../assets/images/wedding/andy_jeska/10100565866_2fd1627ee6_k.jpg');
  private imgData7: string = `url(${this.photo7})`;
  private photo8 = require('../assets/images/wedding/andy_jeska/10100565866_2fd1627ee6_k.jpg');
  private imgData8: string = `url(${this.photo8})`;
}
