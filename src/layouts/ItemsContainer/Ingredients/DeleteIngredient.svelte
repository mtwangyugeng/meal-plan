<script>
    import DeleteIcon from "$src/assets/DeleteIcon.svelte";
    import PopoutMessage from "$src/layouts/_PopoutMessage.svelte";
    
        let deleting = false;
    </script>
    
    <button class="DeleteIngredient" on:click={()=>deleting = true}>
        <DeleteIcon />
    </button>
    
    {#if deleting}
        <PopoutMessage>
            <div class="Window">
            <div class="Message">Delete Ingredient?</div>
            
            <div class="Chooses">
                <button on:click={()=>deleting = false}>Yes</button>
                <button on:click={()=>deleting = false}>Cancel</button>
            </div>

            </div>
        </PopoutMessage>
    {/if}
    
    <style>
        .DeleteIngredient:hover {
            opacity: 0.7;
        }
    
        .DeleteIngredient :global(svg){
            width: 30px;
            height: 30px;
        }

        .Window {
            background-color: white;
            margin-bottom: 300px;
            padding: 30px;
            border-radius: 10px;
        }
        .Chooses {
            display: flex;
            justify-content: space-between;
        }
        .Message {
            margin-bottom: 20px;
        }
    </style>