for i in {1..5000}
do  
   echo $i
   vdo tasks new -t "demoTitle"$i
done
