import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var marked: any;
declare var MathJax: any;

@Component({
  moduleId: module.id,
  selector: 'md-previewer',
  templateUrl: 'preview.component.html',
  styleUrls: ['preview.component.css'],
  directives: []
})
export class PreviewComponent implements AfterViewInit {
  text: string = ' \
## Your markdown here\n\n \
*Markdown* **is** `awesome`.\n\n \
### Now with support for math\n\n \
Math input is specified using the **TeX** language. Make math inline like this \\\\( ax^{2}+bx+c=0 \\\\). \
Some display math:\n\n \
\\\\[ x=\\frac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a} \\\\]\n\n \
\\\\[ f = f(t) = f(x_1(t), \\ldots, x_n(t)) \\\\]\n\n \
\\\\[ \\mathrm{d}f = \\sum_{i=1}^n \\frac{\\partial f}{\\partial x_i}\\frac{\\mathrm{d}x_i}{\\mathrm{d}t} \\\\]\n\n \
#### Check out:\n\n \
* [marked](https://github.com/chjj/marked)\n \
* [MathJax](https://github.com/mathjax/MathJax)\n \
* [angular2-seed](https://github.com/mgechev/angular2-seed)\n\n';
  time: any;

  constructor() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }

  ngAfterViewInit() { MathJax.Hub.Queue(['Typeset', MathJax.Hub]); }
  getMarked() { return marked(this.text); }
  reRenderMath() {
    clearTimeout(this.time);
    this.time = setTimeout(() => { MathJax.Hub.Queue(['Typeset', MathJax.Hub]); }, 1000);
  }
}
