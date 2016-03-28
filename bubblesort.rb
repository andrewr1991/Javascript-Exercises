def bubbleSort(array)
sort = true

while sort do
	sort = false
	1.upto(array.size-1) do |i| 
		if array[i] < array[i-1]
			array[i-1], array[i] = array[i], array[i-1]
			sort = true
		end
	end
end
	puts array
end

bubbleSort([4,3,2,2,10,1])
