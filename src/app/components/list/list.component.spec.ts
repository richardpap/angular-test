import { ApiService } from './../../services/api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, BehaviorSubject } from 'rxjs';

class MockRouter {
  navigateByUrl(url: string): string {
    return url;
  }
}

class MockApiService {
  getListData(): Observable<any> {
    return new BehaviorSubject<any>(null);
  }
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let apiService: ApiService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ApiService, useClass: MockApiService },
        { provide: Router, useClass: MockRouter },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call apiservice.getListData() on ngOnInit', () => {
    // given
    const apiServiceStub = spyOn(apiService, 'getListData');
    // when
    component.ngOnInit();
    // then
    expect(apiServiceStub).toHaveBeenCalled();
    expect(apiServiceStub).toHaveBeenCalledTimes(1);
  });

  it('should call showDetailsPage() in case of button click', async () => {
    // given
    const button = fixture.debugElement.nativeElement.querySelector('button');
    const selectedId = 1;
    const clickEvent = spyOn(component, 'showDetailsPage');
    // when
    button.click();
    // then
    fixture.whenStable().then(() => {
      expect(clickEvent).toHaveBeenCalled();
      expect(clickEvent).toHaveBeenCalledTimes(1);
      expect(clickEvent).toHaveBeenCalledWith(selectedId);
    });
  });

  it('should call router.navigateByUrl() when component.showDetailsPage() is called with id', async () => {
    // given
    const selectedId = 1;
    const routerStub = spyOn(router, 'navigateByUrl');
    // when
    component.showDetailsPage(selectedId);
    // then
    fixture.whenStable().then(() => {
      expect(routerStub).toHaveBeenCalled();
      expect(routerStub).toHaveBeenCalledTimes(1);
      expect(routerStub).toHaveBeenCalledWith(`/details/${selectedId}`);
    });
  });
});
