for i in {1..5000}
do  
   echo $i
   v_posts tasks new -t "demoTitle"$i
done
