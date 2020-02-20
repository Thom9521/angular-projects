import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products.component";
import { ProductComponent } from "./product.component";
import { RatingComponent } from "./rating.component";
import { JumboTronComponent } from "./jumbotron.component";

import { TruncatePipe } from "./truncate.pipe";
import { ReplacePipe } from "./replace.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe,
    JumboTronComponent,
    ReplacePipe
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
