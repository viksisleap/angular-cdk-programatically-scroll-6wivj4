import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

type Position = 'start' | 'mid' | 'end';

/** @title Fixed size virtual scroll with custom buffer parameters */
@Component({
  selector: 'cdk-virtual-scroll-fixed-buffer-example',
  styleUrls: ['cdk-virtual-scroll-fixed-buffer-example.css'],
  templateUrl: 'cdk-virtual-scroll-fixed-buffer-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkVirtualScrollFixedBufferExample {
  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;
  items = Array.from({ length: 100 }).map((_, i) => `Item #${i}`);

  scroll(position: Position) {
    let scrollIndex: number;
    switch (position) {
      case 'start':
        scrollIndex = 0;
        break;
      case 'mid':
        scrollIndex = this.items.length / 2;
        break;
      case 'end':
        scrollIndex = this.items.length;
        break;
    }
    this.viewPort.scrollToIndex(scrollIndex, 'smooth');
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */