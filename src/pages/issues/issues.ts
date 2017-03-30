import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  selector: 'issues-page',
  templateUrl: 'issues.html'
})
export class IssuesPage {

  public items = [];
  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public http: Http) 
  {

    
  }

  ionViewDidLoad()
  {
    this.items = [
      {title: '	MSDP conversion fails', 
      description: `MSDP conversion fails after upgrade from 2.5.3 to 2.6.1:
      Customer is upgrading from 2.5.3 to 2.6.1 and while the upgrade completes 
successfully the 
conversion of the MSDP pool on the appliance failed as the new /msdp/cat 
volume was too small.

First conversion failure (log truncated to remove status updates):

Checking storage format


Your Media Server Deduplication Pool requires conversion


Converting data to new format`},
      {title: 'Restore failed with 2800', 
      description: `1. Install 7.1.0.4 Master/Media/Client, config MSDP, backup/restore were 
successful.
2. Upgrade Master/Media/Client to 7.7, backup was successful, but restore 
failed
with 2800 (STATUS 24: socket write failed)
3. Restarted Media and Client, restore still failed.
`}]
  }

  addItem()
  {

    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.present();
    addModal.onDidDismiss(
      (item) => {
        if (item)
        {
          this.saveItem(item);
        }
      }
    );

  }

  removeItem(item)
  {
    for (let i = 0; i < this.items.length; i++)
    {
      if (this.items[i] == item)
      {
        this.items.splice(i,1);
      }
    }
  }

  saveItem(item)
  {
    this.items.push(item);
    //this.http.post('http://localhost:3000/issues/create', JSON.stringify(item), {} );

  }

  viewItem(item)
  {

    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}
