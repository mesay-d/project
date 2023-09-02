import { Component } from '@angular/core';

@Component({
  selector: 'pages',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  currentpage=0;
  images=[
    {
      title:"rayana",
      url:"https://images.unsplash.com/photo-1482482097755-0b595893ba63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
    },
    {title:"ocean day time",
  url:"https://images.unsplash.com/photo-1533536201350-93ebe24101f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3519&q=80"},
    {title:"dashen trara",url:"https://images.unsplash.com/photo-1523032217284-d9e49d6c5f04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3010&q=80"},
    {title:"image beach",url:"https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"},
  
    {
      title:"rayana",
      url:"https://images.unsplash.com/photo-1482482097755-0b595893ba63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
    },
    {title:"ocean day time",
  url:"https://images.unsplash.com/photo-1533536201350-93ebe24101f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3519&q=80"},
    {title:"dashen trara",url:"https://images.unsplash.com/photo-1523032217284-d9e49d6c5f04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3010&q=80"},
    {title:"image beach",url:"https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"},
  
    {
      title:"rayana",
      url:"https://images.unsplash.com/photo-1482482097755-0b595893ba63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
    },
    {title:"ocean day time",
  url:"https://images.unsplash.com/photo-1533536201350-93ebe24101f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3519&q=80"},
    {title:"dashen trara",url:"https://images.unsplash.com/photo-1523032217284-d9e49d6c5f04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3010&q=80"},
    {title:"image beach",url:"https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"},
  
    {
      title:"rayana",
      url:"https://images.unsplash.com/photo-1482482097755-0b595893ba63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
    },
    {title:"ocean day time",
  url:"https://images.unsplash.com/photo-1533536201350-93ebe24101f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3519&q=80"},
    {title:"dashen trara",url:"https://images.unsplash.com/photo-1523032217284-d9e49d6c5f04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3010&q=80"},
    {title:"image beach",url:"https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"},
  
    {
      title:"rayana",
      url:"https://images.unsplash.com/photo-1482482097755-0b595893ba63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
    },
    {
      title:"rayana",
      url:"https://images.unsplash.com/photo-1482482097755-0b595893ba63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
    },
    {title:"ocean day time",
  url:"https://images.unsplash.com/photo-1533536201350-93ebe24101f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3519&q=80"},
    {title:"dashen trara",url:"https://images.unsplash.com/photo-1523032217284-d9e49d6c5f04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3010&q=80"},
    {title:"image beach",url:"https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"},
  
  ]
  changePagenation(index:number){
    return Math.abs(this.currentpage-index)<5
  }

}
