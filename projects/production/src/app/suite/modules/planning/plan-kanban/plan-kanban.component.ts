import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxKanbanComponent } from 'jqwidgets-ng/jqxkanban'
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

@Component({
  selector: 'app-plan-kanban',
  templateUrl: './plan-kanban.component.html',
  styleUrls: ['./plan-kanban.component.css']
})
export class PlanKanbanComponent implements OnInit {

  constructor() { }

  @ViewChild('inputReference') input: jqxInputComponent;
  @ViewChild('kanbanReference') kanban: jqxKanbanComponent;
  @ViewChild('buttonReference') button: jqxButtonComponent;

  // kanban settings

  columns: any[] = [
    { text: "Backlog", dataField: "backlog" },
    { text: "In Progress", dataField: "in_progress" },
    { text: "Finished", dataField: "finished" }
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

  ngOnInit(): void {
  }

}
