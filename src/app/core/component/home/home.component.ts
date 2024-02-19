import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first, pluck, Subscription, switchMap, tap } from 'rxjs';
import { IAppStore } from 'src/app/AppStore/app-store.interface';
import { Product } from 'src/app/shared/models/product.interface';
import { CdkLayoutService } from 'src/app/shared/service/cdk-layout.service';
import { swapAnimation } from '../animate/animate-triger';
import { Store } from '@ngrx/store'
import { skeletonLastView, skeletonProducts } from 'src/app/AppStore/app-skeleton-data';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [swapAnimation]
})
/**
 * Component for the home page.
 */
export class HomeComponent implements OnInit, OnDestroy {
  /**
   * object Represent Products Model
   */
  products: Products = <Products>{}

  /**
   * The list of products that view in grid .
   */
  productList: Product[] = <Product[]>[]
  /**
   * The list of background images.
   */
  bgImgList: string[] = []

  /**
   * The active category of products.
   */
  activeCategory: keyof Products = 'new';

  /**
   * Indicates if the component is currently loading.
   */
  isLoading: boolean = true;

  /**
   * Indicates if the component is in tablet mode.
   */
  isTabletMode?: boolean;
  currentPath: string = ''
  // component subscription
  storeSubscription?: Subscription;
  tabletNavigatorSubscription?: Subscription;

  constructor(
    private layout: CdkLayoutService,
    private router: ActivatedRoute,
    private route: Router,
    private store: Store<{ AppStore: IAppStore }>
  ) { }

  /**
   * Initializes the component.
   * Simulate server response delay
   * @returns void
   */
  ngOnInit(): void {
    // Simulate server response delay
    setTimeout(() => {
      this.initializeData()
    }, 4000);
    this.initializeTabletMode()
    this.setSkeletonFakeData()
  }

  /**
   * Initializes the data for the component.
   * @returns void
   * @implements  It retrieves the products and background images from the store
   * determine the active category
   */
  private initializeData(): void {
    this.storeSubscription = this.store.select('AppStore').subscribe(
      appStore => {
        this.products = new Products(appStore.products)
        this.productList = this.products[this.activeCategory]
        this.bgImgList = appStore.backgroundImage
      })
    this.isLoading = false
    this.initializeTabletMode()

  }

  /**
   * Initializes the tablet mode for the component.
   * and sets up the category navigator based on the query parameter
   * @returns void
   */

  private initializeTabletMode(): void {
    this.currentPath = this.router.snapshot.url[0].path
    this.tabletNavigatorSubscription = this.layout.isTabletMode.pipe(
      tap(isTabletMode => this.isTabletMode = isTabletMode),
      switchMap(() => this.router.queryParamMap)).
      subscribe(param => this.setCategoryNavigator(<keyof Products>param.get('category')))
  }

  /**
   * Sets the active category of products based on the given parameter.
   * If the component is in tablet mode and no parameter is given, it will navigate to the default category.
   * @param {keyof Products} param The category parameter.
   * @returns void
   */
  private setCategoryNavigator(param: keyof Products): void {

    if (!this.isTabletMode && this.currentPath == 'home')
      this.route.navigate(['/'])
    else if (!param && this.currentPath == 'home') {
      this.route.navigate(['/'], { queryParams: { category: 'new' } })
      // delay until reNavigate 
      setTimeout(() => this.setSkeletonFakeData() , 10)
    }
    this.activeCategory = param || 'new';
    this.productList = this.products[this.activeCategory]

  }
  /**
   * Sets the fake skeleton data for products.
   * @memberof Home
   * @returns {void}
 */

  setSkeletonFakeData() {
    this.productList = skeletonProducts
    this.products.lastView = skeletonLastView
  }

  /**
 * used for tracking changes in an *ngFor loop with the trackBy directive.
 * 
 * @param index - The index of the current product in the array
 * @param product - The product item to generate a unique identifier for
 * @returns A unique identifier for the product based on its ID
 */

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
  /* clean subscription  */
  ngOnDestroy(): void {
    this.currentPath = ''    
    this.storeSubscription?.unsubscribe()
    this.tabletNavigatorSubscription?.unsubscribe()
  }

}



