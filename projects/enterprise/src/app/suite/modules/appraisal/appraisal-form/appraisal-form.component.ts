import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxFormComponent } from 'jqwidgets-ng/jqxform'

@Component({
  selector: 'app-appraisal-form',
  templateUrl: './appraisal-form.component.html',
  styleUrls: ['./appraisal-form.component.css']
})
export class AppraisalFormComponent implements OnInit {

  constructor() { }

  @ViewChild('formReference') button: jqxFormComponent;

  template: any[] = [
		{ type: 'label', label: 'Job knowledge' },
		{
			bind: 'job_knowledge',
			type: 'option',
			label: 'Job knowledge',
			labelPosition: 'right',
			columnWidth: '60px',
			align: 'left',
			width: '15px',
			optionslayout: 'horizontal',
			options: [
				{ label: '1', value: "1" },
				{ label: '2', value: "2" },
				{ label: '3', value: "3" },
				{ label: '4', value: "4" },
				{ label: '5', value: "5" }
			]
		},
		{ type: 'blank', rowHeight: '10px' },
		{ type: 'label', label: 'Quality of work' },
		{
			bind: 'quality_of_work',
			type: 'option',
			label: 'Quality of work',
			labelPosition: 'right',
			columnWidth: '60px',
			align: 'left',
			width: '15px',
			optionslayout: 'horizontal',
			options: [
				{ label: '1', value: "1" },
				{ label: '2', value: "2" },
				{ label: '3', value: "3" },
				{ label: '4', value: "4" },
				{ label: '5', value: "5" }
			]
		},
		{ type: 'blank', rowHeight: '10px' },
		{ type: 'label', label: 'Productivity' },
		{
			bind: 'productivity',
			type: 'option',
			label: 'Productivity',
			labelPosition: 'right',
			columnWidth: '60px',
			align: 'left',
			width: '15px',
			optionslayout: 'horizontal',
			options: [
				{ label: '1', value: "1" },
				{ label: '2', value: "2" },
				{ label: '3', value: "3" },
				{ label: '4', value: "4" },
				{ label: '5', value: "5" }
			]
		},
		{ type: 'blank', rowHeight: '10px' },
		{ type: 'label', label: 'Dependability' },
		{
			bind: 'dependability',
			type: 'option',
			label: 'Dependability',
			labelPosition: 'right',
			columnWidth: '60px',
			align: 'left',
			width: '15px',
			optionslayout: 'horizontal',
			options: [
				{ label: '1', value: "1" },
				{ label: '2', value: "2" },
				{ label: '3', value: "3" },
				{ label: '4', value: "4" },
				{ label: '5', value: "5" }
			]
		},
		{ type: 'blank', rowHeight: '10px' },
		{ type: 'label', label: 'Attendance' },
		{
			bind: 'attendance',
			type: 'option',
			label: 'Attendance',
			labelPosition: 'right',
			columnWidth: '60px',
			align: 'left',
			width: '15px',
			optionslayout: 'horizontal',
			options: [
				{ label: '1', value: "1" },
				{ label: '2', value: "2" },
				{ label: '3', value: "3" },
				{ label: '4', value: "4" },
				{ label: '5', value: "5" }
			]
		},
		{ type: 'blank', rowHeight: '10px' },
		{ type: 'label', label: 'Relations with others' },
		{
			bind: 'relations',
			type: 'option',
			label: 'Relations with others',
			labelPosition: 'right',
			columnWidth: '60px',
			align: 'left',
			width: '15px',
			optionslayout: 'horizontal',
			options: [
				{ label: '1', value: "1" },
				{ label: '2', value: "2" },
				{ label: '3', value: "3" },
				{ label: '4', value: "4" },
				{ label: '5', value: "5" }
			]
		},
		{ type: 'blank', rowHeight: '10px' },
		{ type: 'label', label: 'Overall rating' },
		{
			bind: 'overall_rating',
			type: 'option',
			label: 'Overall rating',
			labelPosition: 'right',
			columnWidth: '60px',
			align: 'left',
			width: '15px',
			optionslayout: 'horizontal',
			options: [
				{ label: '1', value: "1" },
				{ label: '2', value: "2" },
				{ label: '3', value: "3" },
				{ label: '4', value: "4" },
				{ label: '5', value: "5" }
			]
		},
		{ type: 'blank', rowHeight: '10px' },
  ];
  
  ngOnInit(): void {
  }

}
