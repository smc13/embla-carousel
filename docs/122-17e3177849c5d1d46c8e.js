"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[122],{122:function(e,a,l){l.r(a),a.default="import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel'\nimport { setupTweenParallax } from './tween-parallax'\nimport '../css/base.css'\nimport '../css/sandbox.css'\nimport '../css/embla.css'\n \nconst OPTIONS: EmblaOptionsType = {}\n \nconst emblaNode = <HTMLElement>document.querySelector('.embla')\nconst viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')\n \nconst emblaApi = EmblaCarousel(viewportNode, OPTIONS)\nconst { applyTweenParallax, removeTweenParallax } = setupTweenParallax(emblaApi)\n \nemblaApi\n  .on('init', applyTweenParallax)\n  .on('scroll', applyTweenParallax)\n  .on('reInit', applyTweenParallax)\n  .on('destroy', removeTweenParallax)\n"}}]);
//# sourceMappingURL=122-17e3177849c5d1d46c8e.js.map