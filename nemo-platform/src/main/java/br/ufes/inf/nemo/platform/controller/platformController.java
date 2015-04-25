package br.ufes.inf.nemo.platform.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class platformController {

	@RequestMapping("/index")
	public String index(HttpServletRequest request) {		
		return "index";
	}
	
	@RequestMapping("/models")
	public String models(HttpServletRequest request) {		
		return "dashboard/pages/models";
	}
	
	@RequestMapping("/about")
	public String about(HttpServletRequest request) {		
		return "dashboard/pages/about";
	}
	
	@RequestMapping("/mlt")
	public String mlt(HttpServletRequest request) {		
		return "dashboard/pages/mlt";
	}
	
	@RequestMapping("/mlt-model")
	public String mltModel(HttpServletRequest request) {		
		return "mlt/mlt-model";
	}
}
