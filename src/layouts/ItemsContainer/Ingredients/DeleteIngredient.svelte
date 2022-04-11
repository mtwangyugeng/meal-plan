<script>
    import DeleteIcon from "$src/assets/DeleteIcon.svelte";
    </script>
    
    <button class="DeleteIngredient" on:click>
        <DeleteIcon />
    </button>
    
    
    
    <style>
        .DeleteIngredient:hover {
            opacity: 0.7;
        }
    
        .DeleteIngredient :global(svg){
            width: 30px;
            height: 30px;
        }

       
    </style>