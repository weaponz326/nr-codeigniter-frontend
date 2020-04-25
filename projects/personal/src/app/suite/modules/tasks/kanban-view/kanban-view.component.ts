import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxKanbanComponent } from 'jqwidgets-ng/jqxkanban'
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.css']
})
export class KanbanViewComponent implements OnInit {

  constructor() { }

  @ViewChild('kanbanReference') kanban: jqxKanbanComponent;
  @ViewChild('buttonReference') button: jqxButtonComponent;

  ngOnInit(): void {
  }

  // kanban settings

  columns: any[] = [
    { text: "To Do", dataField: "todo" },
    { text: "Doing", dataField: "doing" },
    { text: "Done", dataField: "done" }
  ];

  fields: any[] = [
		{ name: "id", map: "task_id", type: "number" },
		{ name: "status", map: "status", type: "string" },
		{ name: "text", map: "task_name", type: "string" },
		{ name: "tags", map: "priority", type: "string" },
		{ name: "content", map: "description", type: "string" }
  ];
  
  source: any =
  {  
    dataType: "json",
    url: "#",
    dataFields: this.fields,
    id: "task_id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);

  resourcesAdapterFunc: any = (): any => {
    let resourcesSource = {
      localData: [
				{ id: 0, name: "", image: "#" },
			],
			dataType: "array",
			dataFields: [
				{ name: "id", type: "number" },
				{ name: "name", type: "string" },
				{ name: "image", type: "string" },
			]
    }

    let resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
		return resourcesDataAdapter;
  }

}
