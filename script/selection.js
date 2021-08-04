function selection()
{
  c_delay = 0;

  for(var i=0;i<array_size-1;i++)
  {
    var min_ind = i;
    div_update(divs[min_ind],div_sizes[min_ind],"red");
    for(var j=i+1; j<array_size;j++)
    { div_update(divs[j],div_sizes[j],"yellow");
      div_update(divs[j],div_sizes[j],"blue");
      if(div_sizes[min_ind]>div_sizes[j])
      { if(min_ind != i){
        div_update(divs[min_ind],div_sizes[min_ind],"blue");
      }
        min_ind = j;
        div_update(divs[min_ind],div_sizes[min_ind],"red");}
    }


    var temp = div_sizes[min_ind];
    div_sizes[min_ind] = div_sizes[i];
    div_sizes[i] = temp;

    div_update(divs[min_ind],div_sizes[min_ind],"red");
    div_update(divs[i],div_sizes[i],"red");
    div_update(divs[min_ind],div_sizes[min_ind],"blue");

    div_update(divs[i],div_sizes[i],"green");

  }

  div_update(divs[i],div_sizes[i],"green");

  enable_buttons();
}
