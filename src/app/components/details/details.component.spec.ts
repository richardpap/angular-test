import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DetailsComponent } from './details.component';

class MockApiService {
  getDetailsData(id: string | number): Observable<any> {
    return new BehaviorSubject<any>(null);
  }
}

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [{ provide: ApiService, useClass: MockApiService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call apiservice.getDetailsData() on ngOnInit', () => {
    // given
    const apiServiceStub = spyOn(apiService, 'getDetailsData');
    // when
    component.ngOnInit();
    // then
    expect(apiServiceStub).toHaveBeenCalled();
    expect(apiServiceStub).toHaveBeenCalledTimes(1);
  });
});
